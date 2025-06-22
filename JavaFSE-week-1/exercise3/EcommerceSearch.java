import java.util.ArrayList;
import java.util.List;

public class EcommerceSearch {


    public static class Product {
        int id;
        String name;
        String description;
        double price;

        Product(int id, String name, String description, double price) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
        }

        void display() {
            System.out.println("ID: " + id);
            System.out.println("Name: " + name);
            System.out.println("Description: " + description);
            System.out.println("Price: $" + price);
            System.out.println("-------------------------");
        }
    }

    public static List<Product> searchProducts(List<Product> productList, String keyword) {
        List<Product> result = new ArrayList<>();
        for (Product product : productList) {
            if (product.name.toLowerCase().contains(keyword.toLowerCase()) ||
                product.description.toLowerCase().contains(keyword.toLowerCase())) {
                result.add(product);
            }
        }
        return result;
    }


    public static void main(String[] args) {
        
        List<Product> products = new ArrayList<>();
        products.add(new Product(1, "Laptop", "A powerful gaming laptop", 1200));
        products.add(new Product(2, "Smartphone", "Latest model with OLED screen", 799));
        products.add(new Product(3, "Headphones", "Noise-cancelling over-ear headphones", 199));
        products.add(new Product(4, "Coffee Maker", "Automatic coffee machine", 99));
        String keyword = "laptop";
        System.out.println("Search Results for: " + keyword);
        List<Product> results = searchProducts(products, keyword);

        if (results.isEmpty()) {
            System.out.println("No products found.");
        } else {
            for (Product product : results) {
                product.display();
            }
        }
    }
}
