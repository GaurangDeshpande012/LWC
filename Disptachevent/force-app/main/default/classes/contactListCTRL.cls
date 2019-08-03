public with sharing class contactListCTRL {
    public contactListCTRL() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id,Name,Phone,Email FROM Contact ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name,Phone,Email FROM Contact WHERE Name LIKE :key AND FirstName!= null];
    }

}
