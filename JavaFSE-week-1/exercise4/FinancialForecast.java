public class FinancialForecast {

    
    public static double[] forecastRevenue(double[] pastRevenue, int monthsToForecast) {
        double[] forecast = new double[monthsToForecast];

        
        double totalGrowth = 0;
        for (int i = 1; i < pastRevenue.length; i++) {
            totalGrowth += (pastRevenue[i] - pastRevenue[i - 1]);
        }
        double avgGrowth = totalGrowth / (pastRevenue.length - 1);

       
        double lastRevenue = pastRevenue[pastRevenue.length - 1];
        for (int i = 0; i < monthsToForecast; i++) {
            lastRevenue += avgGrowth;
            forecast[i] = lastRevenue;
        }

        return forecast;
    }

    public static void main(String[] args) {
        
        double[] pastRevenue = {10000, 12000, 15000, 16000, 17000, 18000};

        
        int forecastMonths = 3;
        double[] forecastedRevenue = forecastRevenue(pastRevenue, forecastMonths);

        System.out.println("Past Revenue:");
        for (double rev : pastRevenue) {
            System.out.println("$" + rev);
        }

        System.out.println("\nForecasted Revenue for next " + forecastMonths + " months:");
        for (int i = 0; i < forecastMonths; i++) {
            System.out.println("Month " + (i + 1) + ": $" + String.format("%.2f", forecastedRevenue[i]));
        }
    }
}
