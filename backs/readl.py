#!/usr/bin/env python
import time
import serial
import requests
from datetime import datetime  
from datetime import timedelta  


ser = serial.Serial(
        port='/dev/ttyUSB0',
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
ini = datetime.now() + timedelta(seconds=1)
pesocap=""
pesoanterior=""
cont = 0
while 1:
        now = datetime.now()
        x=ser.read()
	x=unicode(x, 'utf-8')
        #f = open("pesa.txt", "w")
        #f.write(x)
	#print(x)
	if x.isnumeric() or x =="." :
		pesocap = pesocap + x
		
	#print(pesocap)	
	#print(len(pesocap))
	url = 'https://dcgse.com/calendario_api/apiprod/SetPeso'
	payload = '{"peso":"'+pesocap+'"}'
		
	headers = {'content-type': 'application/json', 'X-User-Token':'Zs-HsGfE1xHQRtqPMRJ9'}
		
	if  x == "l"  :
		#print(pesocap)
		if pesocap == pesoanterior:
			cont = cont +1
		else:
			cont = 0
			pesoanterior=pesocap
		#print cont
		if cont == 10:
			r = requests.post(url, data=payload, headers=headers)    
		#ini = datetime.now() + timedelta(seconds=1)
			print pesocap
			print r
			
					
		pesocap=""
			
        
