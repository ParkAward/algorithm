//remain: https://www.acmicpc.net/problem/11022 Complete


import java.io.*;

public class 11022 {
    public static void main(String[] args) {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
            String s = br.readLine();
            for (int i = 0; i < Integer.valueOf(s); i++) {
                String k = br.readLine();
                String arr[] = k.split(" ");
                int x = Integer.valueOf(arr[0]);
                int y = Integer.valueOf(arr[1]);
                bw.write("Case #"+(i+1)+": "+x+" + "+ y+" = "+(x + y) + "\n");

            }
            bw.flush();
        }catch (IOException e){

        }

    }
}
