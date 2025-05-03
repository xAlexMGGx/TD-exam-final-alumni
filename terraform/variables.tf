
variable "gcp-project" {
  description = "GCP project"
  default     = ""
}

variable "gcp-network" {
  description = "GCP network"
  default     = ""
}

variable "gcp-region" {
  description = "GCP region"
  type        = string
  default     = "us-central1"
}
variable "gcp-zone" {
  description = "GCP zone"
  type        = string
  default     = "us-central1-c"
}
variable "gcp-cluster-name" {
  description = "Cluster name"
  type        = string
  default     = ""
}

variable "gcp-node-count" {
  description = "K8s Worker nodes"
  type        = 
  default     = 
}
variable "gcp-node-size" {
  description = "K8s Worker nodes"
  type        = string
  default     = ""
}