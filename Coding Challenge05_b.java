static class HexConverter {
    static void convertToHex(int x) {
        
        int quotient = x;
        int remainder  = x % 16;
        while (quotient != 0){
            remainder =  quotient % 16;
            quotient =  quotient / 16;
            if(remainder < 10){
                System.out.println(""+remainder);
            }
            switch (remainder){
                case 10: System.out.println('A');
                break;
                case 11: System.out.println('B');
                break;
                case 12: System.out.println('C');
                break;
                case 13: System.out.println('D');
                break;
                case 14: System.out.println('E');
                break;
                case 15: System.out.println('F');
                break;
            }
        }

    }
}
