public with sharing class searchContactController {
 @AuraEnabled
 public static List < contact > fetchContact(String searchKeyWord) {
  String searchKey = searchKeyWord + '%';
  List < Contact > returnList = new List < Contact > ();
  List < Contact > lstOfContact = [select id, Name, Email from contact
                                   where Name LIKE: searchKey LIMIT 5];
 
  for (Contact c: lstOfContact) {
   returnList.add(c);
  }
  return returnList;
 }
}


