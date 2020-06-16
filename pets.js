const createPet = (name, breed) => {
  return {
    petName: name,
    petBreed: breed
  }
}

const BowWowKennels = []

const leo = createPet("leo", "husky")
BowWowKennels.push(leo)

const max = createPet("max", "dalmatian")
BowWowKennels.push(max)

const haru = createPet("haru", "akita")
BowWowKennels.push(haru)

console.log(BowWowKennels)