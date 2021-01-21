#!/usr/bin/env python
# -*- coding: utf-8 -*-

import random

alter = ["jung", "mittelalt", "alt"]
geschlecht = ["männlich", "weiblich"]
attribute = open("attribute.txt").readlines()
berufe = open("berufe.txt").readlines()

print('Vor euch steht eine Person, sie ist\n')

print(alter[random.randint(0, len(alter)-1)] + '\n')

print(geschlecht[random.randint(0, len(geschlecht)-1)] + '\n')

print(attribute[random.randint(0, len(attribute)-1)])

print(attribute[random.randint(0, len(attribute)-1)])

print('und von Beruf\n')

print(berufe[random.randint(0, len(berufe)-1)])
