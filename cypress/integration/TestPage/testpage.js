import { Given, When, Then, AND } from "cypress-cucumber-preprocessor/steps";
import MainPage from '../pageObjects/MainPage'
import AddAssetPage  from "../pageObjects/AddAssetPage"
import ExistingAssetPage from "../pageObjects/ExistingAssetPage"
import generator from '../../support/generator'


const mainPage = new MainPage()
const addAssetPage = new AddAssetPage()
const existingAssetPage = new ExistingAssetPage()
const assetName = `${generator.generateAssetName()}`
const url = 'http://46.101.167.52:3000/'

Given('I go to Test Main page', () => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
  mainPage.getHeadingOnMainPage().should('have.text', title)
})


Given ('I go to add asset page', () => {
addAssetPage.getAddAssetBtn().click()
})


When (`I add new asset with Invalid format {string}`, (invalid) => {
addAssetPage.getNewAssetField().type(invalid)
addAssetPage.getSubmitButton().click()
})

Then ('It should not go to Modal', () => {
addAssetPage.getModalTitle().should('not.exist')
})

When ('I add new asset with valid format', () => {
    addAssetPage.getNewAssetField().clear().type(assetName)
    addAssetPage.getSubmitButton().click()
    })

Then (`It should go to modal and show proper message {string}`, (message) => {
    addAssetPage.getModalMessage().should('include.text', message)
})

Then (`It should show proper title {string}`, (title) =>{
    addAssetPage.getModalTitle().should('have.text', title)
    addAssetPage.getCloseBtnOnModal().click({force : true})
})

When ('I add already added asset', () =>{
    addAssetPage.getNewAssetField().clear().type(assetName)
    addAssetPage.getSubmitButton().click()
})

Given ('I go to view asset page', ()=>{
    existingAssetPage.getExistingAssetBtn().click()
})

When ('I search for asset', ()=>{
    existingAssetPage.getSearchField().clear().type(assetName)
})

When (`I search for asset {string}`, (text)=>{
    existingAssetPage.getSearchField().clear().type(text)
})

Then ('It should show exact asset', ()=>{
   existingAssetPage.getSearchedAssetName().should('have.text', assetName)
   existingAssetPage.getResultCount().should('have.text', "Showing 1 to 1 of 1 entries")
})

Then (`It should show all assets with {string}`, (text)=>{
    existingAssetPage.getSearchedAssetName({multiple : true}).each(($el, index, $list) => {
        $el.text().includes(text)
    })
 })



  

