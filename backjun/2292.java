//N and M (4) success: https://www.acmicpc.net/problem/2292 Complete

public class 2292{
    public static void main(String[] args) {
        int cnt =1,n =new java.util.Scanner(System.in).nextInt();
        for(int i=0,t=1;;i++) if(t>=n)break;else{t+=(6*cnt); cnt++;}
        System.out.println(cnt);
    }
}
