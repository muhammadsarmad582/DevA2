from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("54.196.15.54:3000")  

assert "User Registration" in driver.page_source
print("Test Case 1: Form page loaded successfully.")

driver.quit()
