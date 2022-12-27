# Weather-website

The app is built on salesforce platform. It aims on informing the citizens and the health offiicals of a country about a disease spread in the country. Hence this application helps in controlling the situation of a disease in the region.

![Contact_Tracing_App](https://github.com/choudharymanish8585/contact-tracing/blob/master/screenshots/screenshots.png)

## The technologies used to make this web-application are:

-   Apex Development
-   Async Apex
-   Aura Framework Development
-   SOQL - Salesforce Object Query Language
-   SOSL - Salesforce Object Search Language
-   Database Manipulation
-   Lightning Web Components


## Install the Application

**Make sure you have "git" and Salesoforce CLI installed in your system. Follow below steps to upload object schema along with permission set in your Salesforce Org.**

-   Clone "master" branch from this git repo `git clone https://github.com/hrishi2107/Contact-Tracer.git`
-   Open Terminal/Command Prompt and navigate to above folder
-   Authorize your Salesforce Org `sfdx force:auth:web:login -a TestOrg1`
-   Deploy all metadata to your Salesforce Org `sfdx force:source:deploy -p force-app/main/default/`
-   Assign permission set to current user `sfdx force:user:permset:assign -n Health_Admin`
-   Open Saleforce Org `sfdx force:org:open` and switch to "Contact Tracer" application
