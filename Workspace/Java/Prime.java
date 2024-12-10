class Prime
{
    public static void main(String[]args)
    {
        int count=0;
        for(int i=1;i<=7;i++)
        {
            if(7%i==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            System.out.println("Prime Number");
        }
        else
        {
            System.out.println("Non Prime Number");
        }
    }
}