package com;

import com.service.Shop;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    @Bean
    public Shop shop(){
        return new Shop();
    }
}
