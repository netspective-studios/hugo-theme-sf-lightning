var medigyAuthServicePolicies = {
    canActiveUserDoPublicAnsweredAboutYourInnovation: function(session, answerStatus){
        if(session.personId == null && answerStatus == 1)    
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateNotansweredClaimedInnovatorAboutYourInnovation: function(session, answerStatus, vendorId){
        if(session.personId != null && answerStatus != 1 && session.personId == vendorId)
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateAnsweredInnovatorAboutYourInnovation:function(session, answerStatus, vendorId){
        if(session.personId != null && answerStatus == 1 && session.personId == vendorId)
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateNotnsweredClaimedNotinnovatorAboutYourInnovation:function(session, answerStatus, vendorId){
        if(session.personId != null && answerStatus != 1 && session.personId != vendorId)
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateAnsweredNotinnovatorAboutYourInnovation:function(session, answerStatus, vendorId){
        if(session.personId != null && answerStatus == 1 && session.personId != vendorId)
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateNotansweredClaimedNotinnovatorAboutYourInnovation:function(session, answerStatus, claimStatus, vendorId){
        if(session.personId != null && answerStatus != 1 && session.personId != vendorId && claimStatus == 'true')
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateNotansweredNotclaimedAboutYourInnovation:function(session, answerStatus, claimStatus){
        if(session.personId != null && answerStatus != 1 && claimStatus != "true")
        return true;
        else
        return false;
    },
    canActiveUserDoPublicNotclaimedAboutYourInnovation:function(session, claimStatus){
        if(session.personId == null && claimStatus != "true")
        return true;
        else
        return false;
    },
    canActiveUserDoNotansweredClaimedAboutYourInnovation:function(session, claimStatus, answerStatus, vendorId){
        if(session.personId != vendorId && claimStatus == "true" && answerStatus != 1)
        return true;
        else
        return false;
    },
    canActiveUserDoNotclaimedAboutYourInnovation:function(session, claimStatus, vendorId){
        if(session.personId != vendorId && claimStatus != "true" )
        return true;
        else
        return false;
    },
    canActiveUserDoNotansweredClaimedNotinnovatorAboutYourInnovation:function(session, answerStatus, claimStatus, vendorId){
        if(session.personId != vendorId && claimStatus == "true" && answerStatus != 1)
        return true;
        else
        return false;
  
    },
    canActiveUserDoPublicAboutYourInnovation:function(session){
        if(session.personId == null )
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateClaimedInnovatorEODB:function(session, claimStatus, vendorId){
        if(session.personId != null && session.personId == vendorId && claimStatus == "true")
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateClaimedNotinnovatorEODB:function(session, claimStatus, vendorId){
        if(session.personId != null && session.personId != vendorId && claimStatus == "true")
        return true;
        else
        return false;
    },
    canActiveUserDoPrivateNotClaimedEODB:function(session, claimStatus){
        if(session.personId != null && claimStatus != "true")
        return true;
        else
        return false;
    }

}

var medigyAuthServiceActions = {
    vsibleAction: function(visibleData){
        var visibleDataLength = visibleData.length;
        for (i=0; i<visibleDataLength; i++)
        {
            $(visibleData[i]).show();
        }

    },
    hiddenAction: function(hiddenData){
        var hiddenDataLength = hiddenData.length;
        for (i=0; i<hiddenDataLength; i++)
        {
            $(hiddenData[i]).hide();
        }

    },    
    disableAction: function(disableData){
        var disableDataLength = disableData.length;
        for (i=0; i<disableDataLength; i++)
        {
            $(disableData[i]).attr('disabled',true);
        }

    },    
    addClassAction: function(addClassData){
        var addClassDataLength = addClassData.length;
        for (i=0; i<addClassDataLength; i++)
        {
            $(addClassData[i]).addClass("fade-btn");
        }

    },    
    addClassUpdateAction:function(addClassData, updateClassData)
    {
        var addClassDataLength = addClassData.length;
        for (i=0; i<addClassDataLength; i++)
        {
            $(addClassData[i]).addClass(updateClassData[i]);
        }
    },
    makeVisibleIfActiveUserCanPublicAnsweredAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, session, visible, hidden){
        if(medigyAuthServicePolicies.canActiveUserDoPublicAnsweredAboutYourInnovation(session, answerStatus)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);
        }
    },
    makeVisibleIfActiveUserCanPrivateNotansweredClaimedInnovatorAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, vendorId, session, visible, hidden){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateNotansweredClaimedInnovatorAboutYourInnovation(session, answerStatus, vendorId)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);

        }
    },
    makeVisibleIfActiveUserCanPrivateAnsweredInnovatorAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, vendorId, questionCode, session, visible, hidden){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateAnsweredInnovatorAboutYourInnovation(session, answerStatus, vendorId)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);
            var editButtonClass = '.edit-'+questionCode;
            $(editButtonClass).show();
        }
    },
    makeVisibleIfActiveUserCanPrivateNotansweredClaimedNotinnovatorAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, claimStatus, vendorId, session, visible, hidden, disableData, addClassData){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateNotansweredClaimedNotinnovatorAboutYourInnovation(session, answerStatus, claimStatus, vendorId)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);
        }
    },
    makeVisibleIfActiveUserCanPrivateAnsweredNotinnovatorAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, vendorId, questionCode, session, visible, hidden){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateAnsweredNotinnovatorAboutYourInnovation(session, answerStatus, vendorId)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);
            this.disableAction(disableData);

        }
        var questionTag = ".question-"+questionCode;
        var answerTag = ".answer-"+questionCode;
        if ($(answerTag).css('display') == 'none' && $(questionTag).css('display') == 'none')
        $(answerTag).parent().hide();  

    },

    makeVisibleIfActiveUserCanPrivateNotansweredNotclaimedAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, claimStatus, session, visible, hidden, disabledData){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateNotansweredNotclaimedAboutYourInnovation(session, answerStatus, claimStatus)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);
            this.disableAction(disabledData);
        }
    },
    makeVisibleIfActiveUserCanPublicNotclaimedAboutYourInnovation: function(medigyAuthServicePolicies, claimStatus, session, disableData, addClassData){
        if(medigyAuthServicePolicies.canActiveUserDoPublicNotclaimedAboutYourInnovation(session, claimStatus)){
            this.disableAction(disableData);
            this.addClassAction(addClassData);
        }
    },
    makeVisibleIfActiveUserCanNotansweredClaimedAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, claimStatus, vendorId, session, disableData, addClassData){
        if(medigyAuthServicePolicies.canActiveUserDoNotansweredClaimedAboutYourInnovation(session, claimStatus, answerStatus, vendorId)){
            this.disableAction(disableData);
            this.addClassAction(addClassData);

        }
    },
    makeVisibleIfActiveUserCanNotclaimedAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, claimStatus, vendorId, session, disableData, addClassData){
        if(medigyAuthServicePolicies.canActiveUserDoNotclaimedAboutYourInnovation(session, claimStatus, vendorId)){
            this.disableAction(disableData);
            this.addClassAction(addClassData);

        }
    },
    makeVisibleIfActiveUserCanNotansweredClaimedNotinnovatorAboutYourInnovation: function(medigyAuthServicePolicies, answerStatus, claimStatus, vendorId, session, disableData){
        if(medigyAuthServicePolicies.canActiveUserDoNotansweredClaimedNotinnovatorAboutYourInnovation(session, answerStatus, claimStatus, vendorId)){
            this.disableAction(disableData);

        }
    },
    makeVisibleIfActiveUserCanPublicAboutYourInnovation: function(medigyAuthServicePolicies, session, visible, hidden){
        if(medigyAuthServicePolicies.canActiveUserDoPublicAboutYourInnovation(session)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);

        }
    },
    makeVisibleIfQuestionNoneAnswerNoneAboutYourInnovation: function(answerTag, questionTag){
        if ($(answerTag).css('display') == 'none' && $(questionTag).css('display') == 'none'){
            $(answerTag).parent().hide();
          }
    },
    makeVisibleIfNotAnswered: function(answerData, hidden){
        if ($(answerData).val() != 1){
            this.hiddenAction(hidden);
          }
    },
    makeVisibleIfActiveUserCanPrivateClaimedInnovatorEODB: function(medigyAuthServicePolicies, claimStatus, vendorId, session, visible, hidden, disableData, addClassData, updateClassData){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateClaimedInnovatorEODB(session,claimStatus,vendorId)){
            this.vsibleAction(visible);
            this.hiddenAction(hidden);
            this.disableAction(disableData);
            this.addClassUpdateAction(addClassData,updateClassData);
        }
    },
    makeVisibleIfActiveUserCanPrivateClaimedNotinnovatorEODB: function(medigyAuthServicePolicies, claimStatus, vendorId, session, visible){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateClaimedNotinnovatorEODB(session,claimStatus,vendorId)){
            this.vsibleAction(visible);
        }
    },
    makeVisibleIfActiveUserCanPrivateNotClaimedEODB(medigyAuthServicePolicies, claimStatus, session, visible){
        if(medigyAuthServicePolicies.canActiveUserDoPrivateNotClaimedEODB(session,claimStatus)){
            this.vsibleAction(visible);
        }
    } 
    

}