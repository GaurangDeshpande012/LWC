public with sharing class Consearch {
    @AuraEnabled
    public static List < contact > getContacts(String searchKeyWord)
    {
        String searchKey = searchKeyWord + '%';
    public static List<contact> contacts=[select id,Name,Emial from contact where Name LIKE searchKey LIMIT 10];
    return contacts;
        
    }
}

