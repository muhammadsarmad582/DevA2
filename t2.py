from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("54.196.15.54:3000")

driver.find_element(By.XPATH, '//input[@placeholder="Name"]').send_keys("John Doe")
driver.find_element(By.XPATH, '//input[@placeholder="Registration Number"]').send_keys("12345")

driver.find_element(By.XPATH, '//button[text()="Submit"]').click()

assert "John Doe - 12345" in driver.page_source
print("Test Case 2: User added successfully.")

driver.quit()
