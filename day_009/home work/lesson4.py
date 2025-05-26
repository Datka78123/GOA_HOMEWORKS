#https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/python

def get_grade(s1, s2, s3):
    grd=(s1+s2+s3)/3
    if grd>=90 and grd<=100:
        return"A"
    elif grd>=80 and grd<90:
        return"B"
    elif grd>=70 and grd<80:
        return"C"
    elif grd>=60 and grd<70:
        return"D"
    else:
        return"F"