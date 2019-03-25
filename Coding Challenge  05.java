package com.revature;

public class LinkedList{
    Node head;

    static class Node{
        String s;
        Node next;

        public Node(String s){
            this.s = s;
            this.next = null;
        }
    }
    public static LinkedList add(LinkedList list, String s){
        Node node = new Node(s);
        node.next = null;

        if(list.head == null){
            list.head = node;
        }
        else{
            Node last = list.head;
            while (last.next != null){
                last = last.next;
            }
            last.next = node; 
        }
        return list;
    }
    public static void printList(LinkedList list){
        Node current = list.head;
        while(current.next != null){
            System.out.println(current.s+" ");
            current = current.next;
        }
        System.out.print(current.s);
    }
    public static LinkedList delete(linkedList list, String s){
        Node current = list.head;
        Node prev = null;
        if(current.next != null && s == current.s){
            list.head = current.next;
            return list;
        }
        while(current.next != null && current.s != s) {
            prev = current;
            current = current.next;
        }
        if(current != null){
            prev.next = current.next;
        }
        if(current == null){
            System.out.println("NOT FOUND");
        }
        return list;
    }

}