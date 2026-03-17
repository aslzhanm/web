
class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Some sound"

    def info(self):
        return f"{self.name} is {self.age} years old"

    def __str__(self):
        return f"Animal: {self.name}, Age: {self.age}, Color: {self.color}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):  
        return "Woof!"

    def fetch(self):
        return f"{self.name} is fetching a ball"

    def __str__(self):
        return f"Dog: {self.name}, Breed: {self.breed}, Age: {self.age}"


class Cat(Animal):
    def __init__(self, name, age, color, is_lazy):
        super().__init__(name, age, color)
        self.is_lazy = is_lazy

    def speak(self): 
        return "Meow!"

    def sleep(self):
        return f"{self.name} is sleeping"

    def __str__(self):
        return f"Cat: {self.name}, Lazy: {self.is_lazy}, Age: {self.age}"