class Student:
    """This is a Student class"""
    def __init__(self,name,roll,mark):
       self.roll=roll
       self.name=name
       self.mark=mark
    
    def introduce(self):
        print("Roll is: ",self.roll)
        print("Name is: ",self.name)
        print("Mark is: ",self.mark)

a1=Student("Roshan",100,800)
a1.introduce()
print(a1.__doc__)