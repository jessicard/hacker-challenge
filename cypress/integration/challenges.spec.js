/// <reference types="cypress" />

import { startPage } from "../page-objects/start_page";
import { firstPage } from "../page-objects/first_challenge";
import { secondPage } from "../page-objects/second_challenge";
import { thirdPage } from "../page-objects/third_challenge";
import { fourthPage } from "../page-objects/fourth_challenge";
import { fifthPage } from "../page-objects/fifth_challenge";
import { sixthPage } from "../page-objects/sixth_challenge";
import { seventhPage } from "../page-objects/seventh_challenge";
import { eighthPage } from "../page-objects/eighth_challenge";
import { ninthPage } from "../page-objects/ninth_challenge";
import { tenthPage } from "../page-objects/tenth_challenge";
import { finalPage } from "../page-objects/final_page";

describe('Hacking Challenges Spree', () => {
    const startpage = new startPage();
    const firstpage = new firstPage();
    const secondpage = new secondPage();
    const thirdpage = new thirdPage();
    const fourthpage = new fourthPage();
    const fifthpage = new fifthPage();
    const sixthpage = new sixthPage();
    const seventhpage = new seventhPage();
    const eighthpage = new eighthPage();
    const ninthpage = new ninthPage();
    const tenthpage = new tenthPage();
    const finalpage = new finalPage();

    before(() => {
        startpage.navigate();
        startpage.validateHeading('Hacker Challenge').should('be.visible')
        startpage.normalChallenge().should('be.visible')
        startpage.hardChallenge().should('be.visible')
    })
    
    it('First Challenge', () => {
        startpage.normalChallenge().click()
        firstpage.validateChallengeOneHeading()
        firstpage.enterPassword()
        firstpage.submit()
    })

    it('Second Challenge', () => {
        secondpage.validateChallengeSecondHeading()
        secondpage.removeAttributeAndClick()
    })

    it('Third Challenge', () => {
        thirdpage.validateChallengeThirdHeading()
        thirdpage.challengeText()
        thirdpage.doubleClick()

    })

    it('Fourth Challenge', () => {
        fourthpage.validateChallengeFourthHeading()
        fourthpage.removeHiddenFromClass()
        fourthpage.verifyText()
        fourthpage.visibleLink().click()

    })

})