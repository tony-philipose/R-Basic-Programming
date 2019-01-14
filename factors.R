#factors , are the obj of r
apple<- c('g','r','y','b')
print(apple)
#create factor obj
fObj<- factor(apple)
print(fObj)
#print
print(nlevels(fObj))

vtr <- c(150,200,250,300,350,400)
option <-"mean"
switch(option,
       "mean" = print(mean(vtr)),
       "mode" = print(mode((vtr))),
       "median" = print(median((vtr)))
)