package com.revatureKitchen;

import java.lang.*;
import java.io.*;
import java.util.*;
import java.util.List;
import java.util.ArrayList;

class CodingChallengeJava{
    
    public static void main(String[] args){
    List<String> wordList = new ArrayList<>();  //Create arraylist of words
    wordList.add("karan");
    wordList.add("madam");
    wordList.add("tom");
    wordList.add("civic");
    wordList.add("radar");
    wordList.add("sexes");
    wordList.add("jimmy");
    wordList.add("kayak");
    wordList.add("john");
    wordList.add("refer");
    wordList.add("billy");
    wordList.add("did");
    
    List<String> palindromeList = new ArrayList<>();    //for the palindromes

    for (int i =  0; i < wordList.size(); i++) {    //for each element
        
        /*StringBuilder wordChanger = new StringBuilder();
        wordChanger.append(wordList.get(i));        //Get string
        wordChanger = wordChanger.reverse();        //Reverse String
        String reversedString = wordChanger.toString(); //Reversed word back to string*/
        
        int stringLength = wordList.get(i).length(); // length of string
        char[stringLength] charArray;                           //new char array

        for (int k = stringLength; k > 0; k--) {    //reverse string
            
        }
        
        if(reversedString == wordList.get(i)){
            palindromeList.add(reversedString);
        }
    }
    //Check if palindrome

    //Store in another ArrayList
    }
}