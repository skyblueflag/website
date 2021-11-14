class Students{
    constructor(name, age, gender, address){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    TheStudents(){
        document.write(this.name + "今年" + this.age + "岁，" + this.gender + "来自" + this.address);
    }
}