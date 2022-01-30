class MyClass {
	constructor(public title: string, public message: string){}

	print(){
		return "<h1>" + this.title + "</h1>" +
			"<p>" + this.message + "</p>";
	}
};

var msg:MyClass = new MyClass("Hello", "this is TypeScript sample!");

document.write(msg.print());
