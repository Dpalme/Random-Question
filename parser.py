from collections import defaultdict
import json

questions = []
master_string = ""


lines = open("questions.txt", "r", encoding="UTF-8").readlines()


for index, line in enumerate(lines):
    space_separated_list = line.split(' ')

    if index > 217:
      questions[int(space_separated_list[0][:line.index('.')])]["extra"] = " ".join(space_separated_list[1:]).strip("\n")
    else:
      questions.append({index: " ".join(space_separated_list[1:]).strip("\n"), "extra": ""})

with open("js/question_data.js", "w", encoding="UTF-8") as archivo:
  for question in questions:
    main_question, extra_questions = question.items()
    number, question = main_question
    throwaway, extra = extra_questions
    archivo.write('create_question(%d, "%s", "%s");\n' % (number, question, extra))
