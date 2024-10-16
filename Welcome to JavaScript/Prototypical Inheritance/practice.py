# arr=list(map(int,input().strip("[]").split(",")))
import math
n=int(input())
# k=(1<< (int(math.log2(n))+1))-1
k = (1 << (int(math.log2(n)) + 1)) - 1 
print(n^k)
print(2^3)
b= bin(n)
print(b,n.bit_length())