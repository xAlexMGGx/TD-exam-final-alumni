terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "6.5.0"
    }
  }
}

provider "google" {
  credentials = file("../../icai2025-5f9879654f17.json")

  project = var.gcp-project
  region  = var.gcp-region
  zone    = var.gcp-zone
}
