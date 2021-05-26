package com.tp.vue.instrumentos.repository;

import com.formaciondbi.microservicios.generics.repository.Repository;
import com.tp.vue.instrumentos.entity.Instrumento;

@org.springframework.stereotype.Repository
public interface InstrumentoRepository extends Repository<Instrumento, Long>{

}
