public with sharing class productclass {
    
    @AuraEnabled(cacheable=true)
    public static wrapAccount getProdData(id proid) {

      Product2 pro =[select Image__c,URL__c,name from Product2 where id =:proid];
                  //System.debug(pro.Productpic__c);

      String firstSubString = pro.Image__c.substringBetween('<img', 'img>');
      // System.debug('First substring: ' + firstSubString);

        String secondSubString = firstSubString.substringBetween('src="', '"');
        //System.debug('Second substring: ' + secondSubString);

        String link = secondSubString.replace('amp;', '');
        //System.debug('Link: ' + link);
        wrapAccount wrapAccountObj = new wrapAccount();
        wrapAccountObj.head = pro.name;
        wrapAccountObj.purl = link;
        wrapAccountObj.vurl = pro.URL__c;

        return wrapAccountObj;
        
    } 
    

     

     public class wrapAccount {

      @AuraEnabled public String purl {get; set;}
      @AuraEnabled public String vurl {get; set;}
      @AuraEnabled public String head {get; set;}

 
        //This is the contructor method. When we create a new wrapAccount object we pass a Account that is set to the acc property. We also set the selected value to false
        public wrapAccount() {}
    
  }
}