// userInfo.js

function generateProfiles(nameList, modifiedNameList) {
    const profiles = [];
    nameList.forEach((name, index) => {
      const profile = {
        originalName: name,
        modifiedName: modifiedNameList[index],
        userId: index + 1,
      };
      profiles.push(profile);
    });
    return profiles;
  }
  
  // Test case 
  const names = ["John", "Jane", "Michael", "Emily"];
  const modifiedNames = ["JOHN", "jane", "michael", "EMILY"];
  const userProfiles = generateProfiles(names, modifiedNames);
  console.log(userProfiles);