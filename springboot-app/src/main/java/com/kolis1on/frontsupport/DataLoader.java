package com.kolis1on.frontsupport;

import com.kolis1on.frontsupport.entity.Categories;
import com.kolis1on.frontsupport.repository.CategoriesRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DataLoader implements ApplicationRunner {

    private final CategoriesRepository categoriesRepository;


    @Override
    public void run(ApplicationArguments args) {

        if(!categoriesRepository.existsByName("Пальне")){
            Categories fuel = new Categories();
            fuel.setName("Пальне");
            categoriesRepository.save(fuel);
        }

        if(!categoriesRepository.existsByName("Амуніція")){
            Categories ammunition = new Categories();
            ammunition.setName("Амуніція");
            categoriesRepository.save(ammunition);
        }

        if(!categoriesRepository.existsByName("Медикаменти")){
            Categories medicines = new Categories();
            medicines.setName("Медикаменти");
            categoriesRepository.save(medicines);
        }

        if(!categoriesRepository.existsByName("Харчі")){

            Categories food = new Categories();
            food.setName("Харчі");
            categoriesRepository.save(food);
        }


        if(!categoriesRepository.existsByName("Фінанси")){
            Categories finance = new Categories();
            finance.setName("Фінанси");
            categoriesRepository.save(finance);
        }


    }
}