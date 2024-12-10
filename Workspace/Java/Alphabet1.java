class Alphabet1
{
    public static void main(String[]args)
    {
        int num=3;
        char c='A';
        for(int i=1;i<=num;i++)
        {
            for(int j=1;j<=num;j++)
            {
                System.out.print(c);
                c++;
            }
            System.out.println();
        }
    }
}