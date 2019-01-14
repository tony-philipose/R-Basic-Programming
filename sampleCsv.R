d <- read.csv("/home/local/ASSYST-COC/tony.p/Downloads/p.csv")
print(data)
data
head(d)
max(d$Incident.Year)
min(d$Incident.Year)
sum(d$Police.District)
count.fields(d$Incident.Year)

retval <- subset( d, Incident.Category=="Drug Offense")
head(retval)

retval2 <- subset( d, Incident.Category=="Drug Offense" & Police.District=="Taraval")
print(retval2)
head(retval2)

head(d)[2:2]

head(d)[2]
print(d)[5]
attributes(d)

retval3 <- subset( d, Incident.Category=="Drug Offense")[5]
head(retval3)

retval4 <- subset( d, Incident.Category=="Drug Offense")[16]
head(retval4)