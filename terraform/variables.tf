
variable "gcp-project" {
  description = "GCP project"
  default     = "lab6-id"
}

variable "gcp-network" {
  description = "GCP network"
  default     = "default"
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
  default     = "alejandromgg-cluster"
}

variable "gcp-node-count" {
  description = "K8s Worker nodes"
  type        = number
  default     = 2
}
variable "gcp-node-size" {
  description = "K8s Worker nodes"
  type        = string
  default     = "e2-small"
}