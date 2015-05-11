def problem1
  result = 0
  (0..999).each {|i| result+=i if(i%3==0 || i%5==0) }
  result
end

def problem2
  fib = [1,2]
  limit = 4000000

  while fib[-2]+fib[-1] < limit
    fib<<fib[-2]+fib[-1]
  end

  sum = 0
  fib.each{|i| sum+=i if i.even?}
  sum
end

def problem3 n
  result = 0
  (2..n**0.5).each {|i| result = i if (n % i == 0 && problem3(i)==0) }
  result
end

puts problem1()
puts problem2()
puts problem3(600851475143)