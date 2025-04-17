# Terraform expects GITHUB_TOKEN set as a secret in actions with admin:org permissions to manage teams
# main.tf
terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

# Variables
variable "github_organization" {
  description = "GitHub organization name"
  type        = string
  default     = "GSA-TTS"
}

variable "parent_team_id" {
  description = "ID of the parent team (if creating as nested teams)"
  type        = string
  default     = null
}

# Main TTS Office
# This team is granted write access to the Handbook - all teams inherit Write as children of this team
resource "github_team" "q2" {
  name        = "Technology-Transformation-Services"
  description = "Office of the Deputy Commissioner/Director, Technology Transformation Services (Q2)"
  privacy     = "closed"
  parent_team_id = var.parent_team_id
}

# Technology Operations Division
# Handbook Website Manager and Tech Lead are members of this office
resource "github_team" "q2a0a" {
  name        = "Technology-Operations-Division"
  description = "Technology Operations Division (Q2A0A)"
  privacy     = "closed"
  parent_team_id = github_team.q2.id
}

# others in TTS are periodically added to this team to collaboratively manage the Handbook reviews
resource "github_team" "gsa_tts_handbook_owners" {
  name        = "GSA-TTS-Handbook-Owners"
  description = "Team responsible for GSA-TTS specific handbook content"
  privacy     = "closed"
  parent_team_id = github_team.handbook_owners.id
}

# Main offices under TTS
# These offices are used to update CODEOWNERS.md file for review of specific sections of the Handbook
resource "github_team" "q2a" {
  name        = "TTS-Delivery"
  description = "Office of TTS Delivery - TTS Deputy Director (Q2A)"
  privacy     = "closed"
  parent_team_id = github_team.q2.id
}

resource "github_team" "q2b" {
  name        = "TTS-Operations"
  description = "Office of TTS Operations (Q2B)"
  privacy     = "closed"
  parent_team_id = github_team.q2.id
}

resource "github_team" "q2c" {
  name        = "TTS-Fellowship-Office"
  description = "TTS Fellowship Office (Q2C)"
  privacy     = "closed"
  parent_team_id = github_team.q2.id
}

# Office of TTS Delivery Subdivisions
resource "github_team" "q2aa" {
  name        = "Office-of-Solutions"
  description = "Office of Solutions (Q2AA)"
  privacy     = "closed"
  parent_team_id = github_team.q2a.id
}

resource "github_team" "q2ab" {
  name        = "Office-of-Regulatory-and-Oversight-Systems"
  description = "Office of Regulatory & Oversight Systems (Q2AB)"
  privacy     = "closed"
  parent_team_id = github_team.q2a.id
}

resource "github_team" "q2ac" {
  name        = "Office-of-Integrated-Award-Environment"
  description = "Office of Integrated Award Environment (Q2AC)"
  privacy     = "closed"
  parent_team_id = github_team.q2a.id
}

# Office of TTS Operations Subdivisions
resource "github_team" "q2ba" {
  name        = "Acquisition-Division"
  description = "Acquisition Division (Q2BA)"
  privacy     = "closed"
  parent_team_id = github_team.q2b.id
}

resource "github_team" "q2bb" {
  name        = "Business-Operations-Division"
  description = "Business Operations Division (Q2BB)"
  privacy     = "closed"
  parent_team_id = github_team.q2b.id
}

resource "github_team" "q2bc" {
  name        = "Market-Development-and-Partnerships-Division"
  description = "Market Development & Partnerships Division (Q2BC)"
  privacy     = "closed"
  parent_team_id = github_team.q2b.id
}

resource "github_team" "q2bd" {
  name        = "Outreach-and-Marketing-Division"
  description = "Outreach & Marketing Division (Q2BD)"
  privacy     = "closed"
  parent_team_id = github_team.q2b.id
}

# Office of Solutions Teams (Q2AA)
resource "github_team" "q2aaa" {
  name        = "Cloud-gov-Division"
  description = "Cloud.gov Division (Q2AAA)"
  privacy     = "closed"
  parent_team_id = github_team.q2aa.id
}

resource "github_team" "q2aab" {
  name        = "Login-gov-Division"
  description = "Login.gov Division (Q2AAB)"
  privacy     = "closed"
  parent_team_id = github_team.q2aa.id
}

resource "github_team" "q2aac" {
  name        = "Platforms-and-Services-Division"
  description = "Platforms & Services Division (Q2AAC)"                                                                                             
  privacy     = "closed"
  parent_team_id = github_team.q2aa.id
}

resource "github_team" "q2aad" {
  name        = "Public-Experience-Division"
  description = "Public Experience Division (Q2AAD)"
  privacy     = "closed"
  parent_team_id = github_team.q2aa.id
}

resource "github_team" "q2aae" {
  name        = "FedRAMP-Division"
  description = "FedRAMP Division (Q2AAE)"
  privacy     = "closed"
  parent_team_id = github_team.q2aa.id
}

resource "github_team" "q2aaf" {
  name        = "Accelerators-Division"
  description = "Accelerators Division (Q2AAF)"
  privacy     = "closed"
  parent_team_id = github_team.q2aa.id
}

# Cloud.gov branches
resource "github_team" "q2aaaa" {
  name        = "Cloud-gov-Engineering-Branch"
  description = "Engineering Branch (Q2AAAA)"
  privacy     = "closed"
  parent_team_id = github_team.q2aaa.id
}

# Login.gov branches
resource "github_team" "q2aaba" {
  name        = "Login-gov-Operations-Branch"
  description = "Login.gov Operations Branch (Q2AABA)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

resource "github_team" "q2aabb" {
  name        = "Login-gov-Engineering-Branch"
  description = "Login.gov Engineering Branch (Q2AABB)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

resource "github_team" "q2aabc" {
  name        = "Login-gov-Security-UX-Branch"
  description = "Login.gov Security UX Branch (Q2AABC)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

resource "github_team" "q2aabd" {
  name        = "Login-gov-Product-Branch"
  description = "Login.gov Product Branch (Q2AABD)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

resource "github_team" "q2aabe" {
  name        = "Login-gov-Platform-Branch"
  description = "Login.gov Platform Branch (Q2AABE)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

resource "github_team" "q2aabf" {
  name        = "Login-gov-Security-Branch"
  description = "Login.gov Security Branch (Q2AABF)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

resource "github_team" "q2aabg" {
  name        = "Login-gov-Partnerships-Growth-Branch"
  description = "Login.gov Partnerships & Growth Branch (Q2AABG)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

resource "github_team" "q2aabh" {
  name        = "Login-gov-Engineering-Partnerships-Branch"
  description = "Login.gov Engineering Partnerships Branch (Q2AABH)"
  privacy     = "closed"
  parent_team_id = github_team.q2aab.id
}

# Platforms & Services branches
resource "github_team" "q2aaca" {
  name        = "Communities-and-Collaboration-Branch"
  description = "Communities & Collaboration Branch (Q2AACA)"
  privacy     = "closed"
  parent_team_id = github_team.q2aac.id
}

resource "github_team" "q2aacb" {
  name        = "Web-Tools-Branch"
  description = "Web Tools Branch (Q2AACB)"
  privacy     = "closed"
  parent_team_id = github_team.q2aac.id
}

resource "github_team" "q2aacc" {
  name        = "Open-Data-and-Participatory-Science-Branch"
  description = "Open Data & Participatory Science Branch (Q2AACC)"
  privacy     = "closed"
  parent_team_id = github_team.q2aac.id
}

# Public Experience Division branches
resource "github_team" "q2aada" {
  name        = "Content-and-Outreach-Branch"
  description = "Content & Outreach Branch (Q2AADA)"
  privacy     = "closed"
  parent_team_id = github_team.q2aad.id
}

resource "github_team" "q2aadb" {
  name        = "Customer-Product-Experience-Branch"
  description = "Customer & Product Experience Branch (Q2AADB)"
  privacy     = "closed"
  parent_team_id = github_team.q2aad.id
}

resource "github_team" "q2aadc" {
  name        = "Contact-Center-Operations-Branch"
  description = "Contact Center Operations Branch (Q2AADC)"
  privacy     = "closed"
  parent_team_id = github_team.q2aad.id
}

resource "github_team" "q2aadd" {
  name        = "Infrastructure-and-Technology-Branch"
  description = "Infrastructure & Technology Branch (Q2AADD)"
  privacy     = "closed"
  parent_team_id = github_team.q2aad.id
}

# FedRAMP Division branches
resource "github_team" "q2aaea" {
  name        = "FedRAMP-Branch-A"
  description = "FedRAMP Branch A (Q2AAEA)"
  privacy     = "closed"
  parent_team_id = github_team.q2aae.id
}

resource "github_team" "q2aaeb" {
  name        = "FedRAMP-Branch-B"
  description = "FedRAMP Branch B (Q2AAEB)"
  privacy     = "closed"
  parent_team_id = github_team.q2aae.id
}

# Accelerators Division branches
resource "github_team" "q2aafa" {
  name        = "ARP-Delivery-Branch-A"
  description = "ARP Delivery Branch A (Q2AAFA)"
  privacy     = "closed"
  parent_team_id = github_team.q2aaf.id
}

resource "github_team" "q2aafb" {
  name        = "ARP-Delivery-Branch-B"
  description = "ARP Delivery Branch B (Q2AAFB)"
  privacy     = "closed"
  parent_team_id = github_team.q2aaf.id
}

resource "github_team" "q2aafc" {
  name        = "10x-Branch"
  description = "10x Branch (Q2AAFC)"
  privacy     = "closed"
  parent_team_id = github_team.q2aaf.id
}

resource "github_team" "q2aafd" {
  name        = "Benefits-Studio-Branch"
  description = "Benefits Studio Branch (Q2AAFD)"
  privacy     = "closed"
  parent_team_id = github_team.q2aaf.id
}

# Office of Regulatory & Oversight Systems (Q2AB)
resource "github_team" "q2aba" {
  name        = "Modernized-Rulemaking-Division"
  description = "Modernized Rulemaking Division (Q2ABA)"
  privacy     = "closed"
  parent_team_id = github_team.q2ab.id
}

resource "github_team" "q2abb" {
  name        = "Grants-and-Acquisition-Division"
  description = "Grants & Acquisition Division (Q2ABB)"
  privacy     = "closed"
  parent_team_id = github_team.q2ab.id
}

resource "github_team" "q2abc" {
  name        = "Systems-Design-Division"
  description = "Systems Design Division (Q2ABC)"
  privacy     = "closed"
  parent_team_id = github_team.q2ab.id
}

resource "github_team" "q2abd" {
  name        = "Experience-Design-Division"
  description = "Experience Design Division (Q2ABD)"
  privacy     = "closed"
  parent_team_id = github_team.q2ab.id
}

# Office of Integrated Award Environment (Q2AC)
resource "github_team" "q2aca" {
  name        = "Management-and-Program-Support-Division"
  description = "Management & Program Support Division (Q2ACA)"
  privacy     = "closed"
  parent_team_id = github_team.q2ac.id
}

resource "github_team" "q2acb" {
  name        = "Business-Applications-Operations-Division"
  description = "Business Applications Operations Division (Q2ACB)"
  privacy     = "closed"
  parent_team_id = github_team.q2ac.id
}

resource "github_team" "q2acc" {
  name        = "Outreach-and-Stakeholder-Engagement-Division"
  description = "Outreach & Stakeholder Engagement Division (Q2ACC)"
  privacy     = "closed"
  parent_team_id = github_team.q2ac.id
}

resource "github_team" "q2adb" {
  name        = "Centers-of-Excellence-Division"
  description = "Centers of Excellence Division (Q2ADB)"
  privacy     = "closed"
  parent_team_id = github_team.q2.id
}
