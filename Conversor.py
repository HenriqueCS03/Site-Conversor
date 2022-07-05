num = input("Digite um número inteiro: ")
conversoes  = int(input("Escolha uma das opções de conversão(lembre-se, para converter em decimal, digite corretamente):\n[1] Para decimal\n[2] Para binário\n[3] Para octagonal\n[4] Sair do programa\nDigite a opção: "))

i = 0
x = 0 
conta = 0
recebe = 0
decimal = ''
octal = ''
invertido = ''
e = 2

while conversoes != 4:
    if conversoes == 1:
        num = num[::-1]
        while i < len(num):   
            if num[i] == "1":
                numero = int(num[i])
                conta = conta + numero * e ** x
            x+= 1
            i+=1
        x+=1
        i+=1
        print("O valor convertido para decimal é: ",conta)
        conversoes = int(input("Digite outra opção: "))
    elif conversoes == 2:
        numero = int(num)
        while numero  > 0 :
            recebe = numero % 2
            recebe = str(recebe)
            decimal += recebe
            numero = numero // 2
        decimal = decimal[::-1]
        print("A conversão para binário é: ",decimal)    
        conversoes = int(input("Digite outra opção: "))
    elif conversoes == 3:
        numero = int(num)
        while numero > 0:
            recebe = numero % 8
            recebe = str(recebe)
            octal += recebe
            numero = numero // 8
        octal = octal[::-1]    
        print("Decimal para octal é: ",octal)
        conversoes = int(input("Digite outra opção: "))
  
print("Finalizado!")
     