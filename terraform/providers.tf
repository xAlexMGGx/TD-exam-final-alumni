terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "6.5.0"
    }
  }
}

provider "google" {
  credentials = file("../../lab6-id-6a1fb88be9f0.json")

  project = var.gcp-project
  region  = var.gcp-region
  zone    = var.gcp-zone
}
