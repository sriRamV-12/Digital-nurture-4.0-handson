public class FactoryMethod {

    
    interface Shape {
        void draw();
    }

    static class Circle implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Circle.");
        }
    }


    static class Rectangle implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Rectangle.");
        }
    }

    static class Square implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Square.");
        }
    }


    static class ShapeFactory {
        public Shape getShape(String shapeType) {
            if (shapeType == null) return null;

            return switch (shapeType.toLowerCase()) {
                case "circle" -> new Circle();
                case "rectangle" -> new Rectangle();
                case "square" -> new Square();
                default -> null;
            };
        }
    }

    
    public static void main(String[] args) {
        ShapeFactory shapeFactory = new ShapeFactory();

        Shape shape1 = shapeFactory.getShape("circle");
        shape1.draw();

        Shape shape2 = shapeFactory.getShape("rectangle");
        shape2.draw();

        Shape shape3 = shapeFactory.getShape("square");
        shape3.draw();
    }
}
