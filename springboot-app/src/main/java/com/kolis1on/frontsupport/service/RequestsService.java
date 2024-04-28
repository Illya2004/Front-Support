package com.kolis1on.frontsupport.service;

import com.kolis1on.frontsupport.config.JwtService;
import com.kolis1on.frontsupport.dto.RequestDTO;
import com.kolis1on.frontsupport.dto.RequestResponseDTO;
import com.kolis1on.frontsupport.dto.security.UserResponseDTO;
import com.kolis1on.frontsupport.entity.Categories;
import com.kolis1on.frontsupport.entity.Requests;
import com.kolis1on.frontsupport.entity.User;
import com.kolis1on.frontsupport.exception.UserIdIsNotCorrectException;
import com.kolis1on.frontsupport.repository.CategoriesRepository;
import com.kolis1on.frontsupport.repository.RequestsRepository;
import com.kolis1on.frontsupport.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@Service
@AllArgsConstructor
public class RequestsService {
    private RequestsRepository requestsRepository;
    private UserRepository userRepository;
    private CategoriesRepository categoriesRepository;
    private JwtService jwtService;

    public List<Categories> getAllCategories(){
        return categoriesRepository.findAll();
    }
    public void createRequest(RequestDTO requestDTO){
        String token = jwtService.getCurrentUserToken();
        String userEmail = jwtService.extractUserEmail(token);

        Requests request = Requests.builder()
         .description(requestDTO.getDescription())
                .location(requestDTO.getLocation())
                .requestCategories(categoriesRepository.findAllById(requestDTO.getCategories()))
                .user(userRepository.findByEmail(userEmail).orElseThrow())
                .build();

        requestsRepository.save(request);

    }

    public Long countAllRequests(){
        return requestsRepository.count();
    }
    public List<RequestResponseDTO> findByFilters(long limit, long page,
                                                  String filterDate,
                                                  String location,
                                                  String categories){
        List<Requests> requests = requestsRepository.findAll().stream()
                .skip((page - 1) * limit)
                .limit(limit)
                .toList();
        if(location != null && !location.isEmpty() )
            requests = requests.stream()
                    .filter(request -> request.getLocation().equals(location))
                    .toList();

        if(categories != null && !categories.isEmpty()) {
            List<String> categoriesList = Arrays.stream(categories.split("|")).toList();

            requests = requests.stream()
                    .filter(request -> request.getRequestCategories().stream()
                            .map(Categories::getName)
                            .anyMatch(categoriesList::contains))
                    .toList();
        }

        if(!filterDate.isEmpty() && filterDate.equals("ASC"))
            requests = requests.stream().
                    sorted(Comparator.comparing(Requests::getCreationTime)).toList();

        if(!filterDate.isEmpty() && filterDate.equals("DESC"))
            requests = requests.stream().
                    sorted(Comparator.comparing(Requests::getCreationTime).reversed()).toList();


        return transformRequestList(requests);

    }

    private List<RequestResponseDTO> transformRequestList(List<Requests> requests){

        return requests.stream().map(request -> RequestResponseDTO.builder()
                .categories(request.getRequestCategories())
                .user(UserResponseDTO.userToDTO(request.getUser()))
                .location(request.getLocation())
                        .requestId(request.getId())
                .description(request.getDescription())

                .build())
                .toList();



    }

}
