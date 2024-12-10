class Shopping
{
    public static void main(String[]args)
    {
        char t_size='m';
        int t_price=800;
        char p_size='m';
        int p_price=1000;
        boolean res=t_size==p_size&&t_size<=p_price;
        System.out.println(res);
    }
}