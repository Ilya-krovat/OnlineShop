package com.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@JsonSerialize
public class Product{
    private int id;
    private String name;
    private String description;
    private String price;
    private String pic;
    private String date;
    private boolean status;
    private String category;
}
