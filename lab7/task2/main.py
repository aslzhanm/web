from models import Animal, Dog, Cat


def main():
    a = Animal("Wolf", 5, "gray")
    d = Dog("Rex", 3, "brown", "Labrador")
    c = Cat("Murka", 2, "white", True)

    animals = [a, d, c]

    for animal in animals:
        print(animal)              
        print(animal.speak())     
        print(animal.info())
        print("-----")

if __name__ == "__main__":
    main()