import random
import time
import requests


def put():
    ps = random.randint(1, 20)
    if ps < 10:
        name = 'Entity0' + str(ps)
    else:
        name = 'Entity' + str(ps)
    params = {"name": name,
              "par0": random.triangular(-1, 1),
              "par1": random.triangular(-1, 1),
              "par2": random.triangular(-1, 1),
              "par3": random.triangular(-1, 1),
              "par4": random.triangular(-1, 1),
              "par5": random.triangular(-1, 1),
              "par6": random.triangular(-1, 1),
              "par7": random.triangular(-1, 1),
              "par8": random.triangular(-1, 1),
              "par9": random.triangular(-1, 1),
              "par10": random.triangular(-1, 1),
              "par11": random.triangular(-1, 1),
              "par12": random.triangular(-1, 1),
              "par13": random.triangular(-1, 1),
              "par14": random.triangular(-1, 1),
              "par15": random.triangular(-1, 1),
              "par16": random.triangular(-1, 1),
              "par17": random.triangular(-1, 1),
              "par18": random.triangular(-1, 1),
              "par19": random.triangular(-1, 1)}
    r = requests.put('http://backend/api/ents/' + name, json=params, headers={'Content-type':'application/json', 'Accept':'application/json'})
    print(r)


while True:
    put()
    time.sleep(0.1)
