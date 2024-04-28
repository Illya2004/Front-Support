from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    APP_SECRET_KEY: str
    DATABASE_URL: str

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()

# postgresql://fronts_user:nP999s9eXD78RSxc@45.142.215.49:5432/front_support?sslmode=require