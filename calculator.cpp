#include <iostream>
#include <cstdlib>

int main(int argc, char* argv[]) {
    if (argc < 3) {
        std::cerr << "Usage: calculator <num1> <num2>" << std::endl;
        return 1;
    }

    double num1 = std::atof(argv[1]);
    double num2 = std::atof(argv[2]);
    double result = num1 + num2;  // Poți schimba această operație
    
    std::cout << result << std::endl;
    return 0;
}