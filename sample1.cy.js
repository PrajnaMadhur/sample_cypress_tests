describe('Test Form Submission', () => {

  it('Verify the navigation to the form and submit it successfully', () => {
      // Step 1: Navigate to the form
      cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');

      // Step 2: Enter name in the “Your Name” field
      cy.get('input[jsname="YPqjbf"]').type('Prajna');

      // Step 3: Select the “18 and above” radio button
      cy.xpath('//div[@class="AB7Lab Id5V1"]').click({multiple:true});

      // Step 4: Select “Yes” from the “Do you exercise every week?” dropdown
      cy.xpath('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]/span').click();
      cy.xpath('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[2]/div[3]/span').click();
      cy.wait(2000)
      // Step 5: Submit the form
      cy.xpath('//span[@class="NPEfkd RveJvd snByac"]').contains('Submit').click({force:true});

      // Step 6: Verify that the form submission is successful
      cy.url().should('include', '/formResponse');
      cy.contains('Your response has been recorded').should('be.visible');
  });
});
