# How to create and setup an Amazon Connect Instance - Tom (Xin Sheng) Zhang

## IN AMAZON WEB SERVICES
1 - Create an AWS account or log into an existing account
  + The main hub for amazon services, will ask a bunch of questions, including billing info
  + Just follow the steps
  + Search for Amazon Connect in the search bar, it will be the top result under services

## IN AMAZON CONNECT DASHBOARD
2 - Create an Amazon Connect Instance
  + A service to create call centers through Amazon
  + May not be listed on the main page, will need to search for it
  + Click on it and create an instance

  + Amazon will walk you through the creation process. 
    * Set Identity, it's fine to store users in Amazon connect unless you have a special place for them
    * Create the Access URL for your instance. 
    * Create an administrator, not needed since as owner you can access the instance as Admin from your dashboard
    * Only need to allow incoming calls, but it's fine to leave it as default with both incoming and outgoing calls
    * Data storage, ok to leave as default and click next, for data management
    * For review and create, it's ok to just create the instance
  + Access the instance using the Access URL

## IN THE INSTANCE
3 - Claim a phone number
  + This is not done during the instance creation
  + The instance is on a seperate web page accessed with the Access URL.
  + When logged in, you should see the dashboard, if not navigate to it.
  + Under the top(Explore your channels of communication) in the body of the contiguration guide, claim a phone number
  + Choose either DID (Direct internal dialing), or a toll-free 1-800 number,
      You'll be able to dial both, so for demonstration either is fine,
      the choice comes later
  + This number will be referenced from step 6 onwards

4 - Create a security profile
  + Under Users, symbol 2 people
  + Name: Inbound
  + Inbound Calls Only: Access to the call control panel, only for answering calls
  + See the agent sample profile and remove the outgoing calls option

5 - Create hours of operations
  + Under Routing
  + Choose "add new hours" 
  + Delete saturday and sunday
      Select the days and click remove
  + Select the weekdays and click edit
      Set the starts to 9am
      Set the End to 05 pm, click the AM to switch it to PM and PM to switch to AM
  + Click save

6 - Queues
  + Under routing
  + Click add new queue
      Essentially the entrance to your call center
  + Set the hours of operation to the one you created in step 5
  + Name the outbound called ID to your company's sales
  + Set the number to the one you claimed in step 3

7 - Routing Profiles
  + Under Users
  + Click "Add new profile"
  + Name it Sales
  + Give it a Description
  + Set Channels and Concurrency: Set the checkbox for voice only
  + Add the queue you created in step 6
  + It will fill out the channels according to what you clicked in Set Channels and Concurrency
  + Leave everything else as default, Priority at 1, Delay(in seconds) at 0
  + Set the default outbound queue to the same queue
  + If you did everything right you can click the add new profile button in the top right.
  + Should show in the routing profiles

8 - Create an Agent Account
  + Make an account for an agent
  + Under users -> User Managemnt
  + Add new users
  + Create and set up a new user
      Template for later users
  + Enter the name and login details
  + Email for account managment and recover
  + Make sure to remember the login and password for testing later
  + Assign them to the routing profile from step 7 and the security profile from step 4
  + Leave phone type as default, soft phone if you intend to use a computer for the calls
  + If everything's correct you can press save at the bottom
  + User will appear in user Management
   
9 - Create a call flow
  + Called contact flow, under routing
  + Will need to create a new flow
  + Give it a name
  + Follow the model of the transfer to agent flow
  + needs to have "set working queue" under "Set" and "transfer to queue" under "Terminate/Transfer" blocks
  + Connect entry point to set working queue and set working queue to transfer to queue
  + connect the errors and at capacity to disconnect
  + Add some informational prompts from the "Interact drop down" for testing and informational purposes
  + Make sure to set the working queue to the queue created in step 6
    * Set parameters by clicking on the block title
  + Finished product should look like this:
  + Save the flow and publish them to make them live.

## TESTING
+ Call the number you claimed to check if it is working
+ Log into the agent account you created to answer the call,
- Use the Access URL for the instance, but use the Agent login and password you created in step 8

+ Make sure you test your microphone and headset to see if the call is going through
+ The customer will hear some of the default options created with the instance, including hold music while an Agent responds to the call. 