import { useParams } from "react-router";
export default function Diagnosis(){
    return `Diagnóstico da consulta ${useParams().appointment_id}`;	
}