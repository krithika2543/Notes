JAVA

Java Developer Kit(JDK) comes with a Java Runtime environment(JRE) and some developer tools. This JRE is an environment where we can execute Java code. JRE is composed of Java Virtual Machine(JVM) (a component that execuetes java bytecode) and some libraries.
Now when we run our code, the source code (.java) gets compiled into a byte code (.class) format with the help of the compiler (javac). Now this byte code file generated can be run on any device given it has a JRE setup hence java is called a portable progamming language (write once run anywhere WORA).
When we execute this file, we generate a native code file using JVM interpretation and JIT (Just in time compiler) (to transalte frequently used bytecode to native machine code), which is then execueted by CPU.
